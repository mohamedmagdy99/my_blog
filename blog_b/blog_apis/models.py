from django.db import models
from django.core.validators import FileExtensionValidator
class PersonalImage (models.Model):
        image=models.ImageField(upload_to="image/")
class Tech(models.Model):
        name=models.CharField(max_length=50,null=False,unique=True)
        icon=models.FileField(upload_to="image/", validators=[FileExtensionValidator(['pdf', 'doc', 'svg','png'])])
        def __str__(self):
                return self.name
class BlogPost(models.Model):
        title=models.CharField(max_length=50,null=False,unique=False)
        publisher=models.CharField(max_length=15,null=False,unique=False)
        body=models.CharField(max_length=250,null=False,unique=False)
        created_at=models.DateTimeField(auto_now=True)
        image=models.ImageField(upload_to="image/" ,unique=False, null=True, default="image-post.png")
        about=models.CharField(max_length=50,null=False,unique=False)
        def __str__(self):
                return self.title