# Generated by Django 4.1.7 on 2023-03-29 19:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tideturnerweb', '0003_alter_following_followed_alter_following_follower'),
    ]

    operations = [
        migrations.AlterField(
            model_name='washingmachinerun',
            name='filter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='runs', to='tideturnerweb.microplasticfilter'),
        ),
        migrations.AlterField(
            model_name='washingmachinerun',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='runs', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='washingmachinerun',
            name='setting',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='runs', to='tideturnerweb.washingmachinesetting'),
        ),
    ]
