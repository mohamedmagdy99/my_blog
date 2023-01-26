from rest_framework import viewsets,permissions
from blog_apis.serializers import *

class PersonalImageList(viewsets.ModelViewSet):
    serializer_class=PersonalImageSerializer
    queryset=PersonalImage.objects.all()
