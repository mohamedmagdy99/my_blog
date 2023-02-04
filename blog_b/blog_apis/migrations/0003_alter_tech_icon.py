# Generated by Django 4.0.3 on 2023-02-02 12:11

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_apis', '0002_tech'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tech',
            name='icon',
            field=models.FileField(upload_to='image/', validators=[django.core.validators.FileExtensionValidator(['pdf', 'doc', 'svg', 'png'])]),
        ),
    ]
