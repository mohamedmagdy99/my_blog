# Generated by Django 4.0.3 on 2023-02-04 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_apis', '0004_blogpost'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='created_at',
            field=models.DateField(auto_now=True),
        ),
    ]
