from django.db import models
from django.core.validators import FileExtensionValidator
class PersonalImage (models.Model):
        image=models.ImageField(upload_to="image/")
class Tech(models.Model):
        name=models.CharField(max_length=50,null=False,unique=True)
        icon=models.FileField(upload_to="image/", validators=[FileExtensionValidator(['pdf', 'doc', 'svg','png'])])
