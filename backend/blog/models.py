from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from .utils import unique_slug_generator

STATUS_CHOICES = (
    ("draft", "Draft"),
    ("published", "Published"),
)


class Post(models.Model):
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    feature_image = models.ImageField(upload_to="images/", default="images/default.png")
    body = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="draft")

    class Meta:
        ordering = ("-published_at",)

    def __str__(self):
        return self.title

@receiver(pre_save, sender=Post)
def pre_save_receiver(sender, instance, *args, **kwargs):
   if not instance.slug:
       instance.slug = unique_slug_generator(instance)