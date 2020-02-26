function fillStorage(collection, formData) {

    return new Promise((resolve, reject) => {


        var currentUser = firebase.auth().currentUser;
        if(currentUser) {
            // firestorage(collection, currentUser.uid, formData);
            // alert("mapping " + currentUser.uid);   
            const app = firebase.app();
            const db = firebase.firestore();
            const data = db.collection(collection).doc(currentUser.uid);
            data.onSnapshot(doc => {
                data.set({data: formData})
                .then(data => {
                    resolve(formData)
                }) 
            }); 
        } else {
            alert("No user signed in")
        }


    })



}

function getData(collection, doc) {
    var currentUser = firebase.auth().currentUser;
    const app = firebase.app();
    const db = firebase.firestore();
    const data = db.collection(collection).doc(currentUser.uid);
    data.onSnapshot(doc => {
        console.log(doc.data())
        return doc.data();
    });
}

function allLawyers(collection, doc) {
    return new Promise((resolve, reject) => {
        listofLawyers = [];
        const app = firebase.app();
        const db = firebase.firestore();
        db.collection("lawyers").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                listofLawyers.push(doc.data());
            })
        }).then(x => {
            resolve(listofLawyers);
        });
    })

}