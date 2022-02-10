from django.urls import path
from .views import PostList, PostDetail

urlpatterns = [
    path('api/v1/posts/', PostList.as_view(), name="posts"),
    path('api/v1/post/<str:slug>/', PostDetail.as_view(), name="post"),
]