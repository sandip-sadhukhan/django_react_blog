from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

class PostList(APIView):
    def get(self, request, format=None):
        queryset = Post.objects.filter(status='published')
        serializer = PostSerializer(instance=queryset, many=True)
        return Response(serializer.data)

class PostDetail(APIView):
    def get(self, request, slug, format=None):
        try:
            post = Post.objects.get(slug=slug, status='published')
            serializer = PostSerializer(instance=post)
            return Response(serializer.data)
        except Post.DoesNotExist:
            return Response({'error': "Post Does't exist"}, status=status.HTTP_404_NOT_FOUND)