from django.db import models
from django.contrib.auth.models import User

class WashingMachineSetting(models.Model):
    machine_name = models.CharField(max_length=256)
    setting_name = models.CharField(max_length=256)
    water_capacity = models.FloatField()
    duration = models.DurationField()
    created_on = models.DateTimeField(auto_now_add=True)

class MicroplasticFilter(models.Model):
    filter_name = models.CharField(max_length=256)
    created_on = models.DateTimeField(auto_now_add=True)
    mp_ratio = models.FloatField()

class WashingMachineRun(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="runs")
    setting = models.ForeignKey(WashingMachineSetting, on_delete=models.CASCADE, related_name="runs")
    filter = models.ForeignKey(MicroplasticFilter, on_delete=models.CASCADE, related_name="runs")
    started = models.DateTimeField(auto_now_add=True)
    notified = models.BooleanField(default=False)

class Following(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")
    followed = models.ForeignKey(User, on_delete=models.CASCADE, related_name="followers")

