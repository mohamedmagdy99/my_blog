# Generated by Django 4.0.3 on 2023-02-04 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_apis', '0003_alter_tech_icon'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('publisher', models.CharField(max_length=15)),
                ('body', models.CharField(max_length=250)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('image', models.ImageField(default='image-post.png', null=True, upload_to='image/')),
                ('about', models.CharField(max_length=50)),
            ],
        ),
    ]