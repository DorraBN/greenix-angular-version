const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

// Middleware pour parser les données du formulaire
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration de nodemailer pour l'envoi d'e-mails
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Utilisez le service de messagerie de votre choix
  auth: {
    user: 'dorransira18@gmail.com', // Votre adresse e-mail
    pass: 'Bacmath20', // Votre mot de passe
  },
});

// Définissez une route pour gérer les requêtes GET vers "/envoyer-email"
app.get('/envoyer-email', (req, res) => {
    // Placez ici la logique pour envoyer l'e-mail
    // Par exemple, utilisez Nodemailer pour envoyer l'e-mail
    // Consultez la documentation de Nodemailer pour plus d'informations : https://nodemailer.com/about/
  
    // Répondez à la requête avec une réponse JSON
    res.json({ message: 'E-mail envoyé avec succès' });
  });
// Route pour gérer la soumission du formulaire
app.post('src/app/formulaire/envoyer-emailnode', (req, res) => {
  const { nom, email, phone, message } = req.body;

  // Configuration de l'e-mail à envoyer
  const mailOptions = {
    from: 'dorransira18@gmail.com', // Adresse e-mail de l'expéditeur
    to: 'dorransira18@gmail.com', // Adresse e-mail du destinataire
    subject: 'Nouveau message de formulaire de contact',
    text: `
      Nom et prénom: ${nom}
      Email: ${email}
      Numéro de téléphone: ${phone}
      Message: ${message}
    `,
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé : ' + info.response);
      res.status(200).send('E-mail envoyé avec succès !');
    }
  });
});

// Démarrage du serveur Node.js
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
