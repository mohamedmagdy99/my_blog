from django.db import models

class PersonalImage (models.Model):
        image=models.ImageField(upload_to="image/")

