const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const app = express();

//@@@ FUNCTION FOR GETTING DOCUMENTS @@@ (way 2 with Express)
app.get('/leequids', (req, res) => {
  admin
      .firestore()
      .collection('leequids')
      .orderBy('createdAt', 'desc') //appear newest posts first, descending order.
      .get()
      .then((data) => {
        let leequids = [];
        data.forEach((doc) => {
          //leequids.push(doc.data()); //instead of pushing all doc, we want this specific info:
          leequids.push({
            leequidId: doc.id,
            body: doc.data().body,
            userHandle: doc.data().userHandle,
            //createdAt: doc.data().createdAt //instead of using the firebase default time format, lets use js time function instead:
            createdAt: new Date().toISOString()
          
          });
        });
        return res.json(leequids);
      })
      .catch((err) => console.error(err));

});
/*
 //function for getting documents: (way 1)
 exports.getLeequids = functions.https.onRequest((req, res) => {
   admin
      .firestore()
      .collection('leequids')
      .get()
      .then((data) => {
        let leequids = [];
        data.forEach((doc) => {
          leequids.push(doc.data());
        });
        return res.json(leequids);
      })
      .catch((err) => console.error(err));

 });
 */

 /**this is just for testing the function deploying to the firebase
 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Lilly!");
 });**/

 //@@@ FUNCTION FOR CREATING DOCUMENTS @@@
 app.post('/createLeequid', (request, result) => {
   /*if (request.method !== 'POST') {
     return result.status(400).json({ error: 'Method not allowed'});
   }*/
   const newLeequid = {
     body: request.body.body,
     userHandle: request.body.userHandle,
     //createdAt: admin.firestore.Timestamp.fromDate(new Date())
     createdAt: new Date().toISOString()
   };

   admin.firestore()
   .collection('leequids')
   .add(newLeequid)
   .then(doc => {
     result.json({message: `document ${doc.id} created succesfully`});
   })

   .catch(err => {
     result.status(500).json({ error: 'something went wrong'});
     console.error(err);
   });
 });

 //telling firebase app will contain all the routes.
 //exports.api because we want this: https://baseurl.com/api/

 exports.api = functions.region('europe-west3').https.onRequest(app);