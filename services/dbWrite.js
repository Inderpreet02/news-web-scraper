const { db, firebase } = require("../firebase");
const { v4: uuidv4 } = require("uuid");

const writeInDb = (headLine, mainCollection, category, name = "news") => {
  if (headLine !== undefined) {
    const docRef = db.collection(mainCollection).doc(category);
    docRef.set(headLine);
    docRef.set(
      {
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  }
};

module.exports = writeInDb;
