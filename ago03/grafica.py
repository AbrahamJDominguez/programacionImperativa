import numpy as np
import matplotlib.pyplot as plt
from matplotlib.widgets import Slider, Button


##################################################
#################################################
##################################################

import matplotlib.colors

def wavelength_to_rgb(wavelength, gamma=0.8):
    ''' taken from http://www.noah.org/wiki/Wavelength_to_RGB_in_Python
    This converts a given wavelength of light to an 
    approximate RGB color value. The wavelength must be given
    in nanometers in the range from 380 nm through 750 nm
    (789 THz through 400 THz).

    Based on code by Dan Bruton
    http://www.physics.sfasu.edu/astro/color/spectra.html
    Additionally alpha value set to 0.5 outside range
    '''
    wavelength = float(wavelength)
    if wavelength >= 380 and wavelength <= 750:
        A = 1.
    else:
        A=0.5
    if wavelength < 380:
        wavelength = 380.
    if wavelength >750:
        wavelength = 750.
    if wavelength >= 380 and wavelength <= 440:
        attenuation = 0.3 + 0.7 * (wavelength - 380) / (440 - 380)
        R = ((-(wavelength - 440) / (440 - 380)) * attenuation) ** gamma
        G = 0.0
        B = (1.0 * attenuation) ** gamma
    elif wavelength >= 440 and wavelength <= 490:
        R = 0.0
        G = ((wavelength - 440) / (490 - 440)) ** gamma
        B = 1.0
    elif wavelength >= 490 and wavelength <= 510:
        R = 0.0
        G = 1.0
        B = (-(wavelength - 510) / (510 - 490)) ** gamma
    elif wavelength >= 510 and wavelength <= 580:
        R = ((wavelength - 510) / (580 - 510)) ** gamma
        G = 1.0
        B = 0.0
    elif wavelength >= 580 and wavelength <= 645:
        R = 1.0
        G = (-(wavelength - 645) / (645 - 580)) ** gamma
        B = 0.0
    elif wavelength >= 645 and wavelength <= 750:
        attenuation = 0.3 + 0.7 * (750 - wavelength) / (750 - 645)
        R = (1.0 * attenuation) ** gamma
        G = 0.0
        B = 0.0
    else:
        R = 0.0
        G = 0.0
        B = 0.0
    return (R,G,B,A)

clim=(350,780)
norm = plt.Normalize(*clim)
wl = np.arange(clim[0],clim[1]+1,2)
colorlist = list(zip(norm(wl),[wavelength_to_rgb(w) for w in wl]))
spectralmap = matplotlib.colors.LinearSegmentedColormap.from_list("spectrum", colorlist)


##################################################
#################################################
##################################################

k = 1.38*10**(-23) ## J/K
T = 5800    ## K
h = 6.626 * 10 **(-34) ## J/s
c = 3*10**8 ## m/s

x = np.linspace(0,8*10**-6,10000)
x = x[1:]

def function(x, T):
    return (2*h*c**2/(x**5))*(1/(np.exp(h*c/(x*k*T))-1))

fig, axs = plt.subplots()
fig.subplots_adjust(bottom=0.25)

"""
Aqui sustituye con las temperaturas que quieras
"""

T1 = 1000
axs.plot(x,function(x,T1), color = "#BBAAFF")

T2 = 2000
axs.plot(x,function(x,T2), color = "#00EEEE")
"""
Fin de la nota
"""

line, = axs.plot(x, function(x, T))

norm = plt.Normalize(0, 780*10**-10)
color = spectralmap(norm(1000.))

axs.fill_between(x,function(x, max([ T,T1 ,T2 ])), color = spectralmap(norm(x)))




#######################################################
#######################################################

"""

#Experimento para colorear el espectro debajo de la curva, no te fijes


poly, = axs.fill(x, function(x,T), facecolor='none')



xmin, xmax = axs.get_xlim()
ymin, ymax = axs.get_ylim()

img_data = np.arange(ymin,ymax,(ymax-ymin)/100.)
img_data = img_data.reshape(1,img_data.size)

# plot and clip the image
im = axs.imshow(img_data, aspect='auto', cmap=spectralmap, extent=[xmin,xmax,ymin,ymax])

im.set_clip_path(poly)

"""

######################################################################################################
######################################################################################################

axstemp = fig.add_axes([0.25, 0.1, 0.65, 0.03])
temp_slider = Slider(
    ax = axstemp,
    label = "Temperatura",
    valmin = 10**-6,
    valmax = 10000,
    valinit= T
)

def update(val):
    line.set_ydata(function(x, temp_slider.val))
    axs.set_ylim(0,max(function(x, temp_slider.val))*1.08)
    fig.canvas.draw_idle()

temp_slider.on_changed(update)

resetax = fig.add_axes([0.8, 0.025, 0.1, 0.04])
button = Button(resetax, 'Reset', hovercolor='0.975')

def reset(event):
    temp_slider.reset()

button.on_clicked(reset)

plt.show()