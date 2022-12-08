from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    created_date = serializers.DateTimeField(format='%d-%m-%Y %H:%M:%S')
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'published', 'created_date']