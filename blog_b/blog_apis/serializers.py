from rest_framework import serializers
from blog_apis.models import *

class PersonalImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=PersonalImage
        fields=['image','id']

class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tech
        fields=['name', 'icon']