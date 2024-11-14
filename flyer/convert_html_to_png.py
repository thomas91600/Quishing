import imgkit

# Spécifie le chemin de ton fichier HTML
html_file = 'flyer.html'
output_png = 'flyer.png'
# Options valides sans l'option -r qui est invalide
options = {
    'width': '1024',   # Définir une largeur spécifique
    'quality': '90',   # Qualité de l'image entre 0 et 100
    "enable-local-file-access": ""
}

# Conversion du fichier HTML en PNG
imgkit.from_file(html_file, output_png, options=options)

print("Le fichier PNG a été généré avec succès !")
