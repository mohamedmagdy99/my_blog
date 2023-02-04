from rest_framework import viewsets,permissions
from blog_apis.serializers import *

class PersonalImageList(viewsets.ModelViewSet):
    serializer_class=PersonalImageSerializer
    queryset=PersonalImage.objects.all()
class TechList(viewsets.ModelViewSet):
    serializer_class=TechSerializer
    queryset=Tech.objects.all()

class BlogPostList(viewsets.ModelViewSet):
    serializer_class=BlogPostSerializer
    queryset=BlogPost.objects.all()