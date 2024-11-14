import qrcode

# Donnée que tu veux encoder dans le QR code
data = "https://thomas91600.github.io/QrCode/"  # Exemple d'URL, modifie avec ce que tu veux

# Génération du QR Code
qr = qrcode.QRCode(
    version=1,  # Taille du QR Code (1 est le plus petit)
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

qr.add_data(data)
qr.make(fit=True)

# Créer une image du QR Code
img = qr.make_image(fill='black', back_color='white')

# Sauvegarder l'image dans un fichier
img.save('qrcode.png')
