from django.contrib import admin
from .models import WashingMachineSetting, MicroplasticFilter, WashingMachineRun, Following

admin.site.register(WashingMachineSetting)
admin.site.register(MicroplasticFilter)
admin.site.register(WashingMachineRun)
admin.site.register(Following)