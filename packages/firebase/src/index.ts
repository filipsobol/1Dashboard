import * as firebase from "firebase/app";
import "firebase/auth";

export default function(context: any) {
    const loginPath = "/auth/login";

    firebase.initializeApp({
        apiKey: "AIzaSyBCSPFk4azYFbBXluDmMsitv64xHxNQxVk",
        authDomain: "dashboard-9740c.firebaseapp.com",
        databaseURL: "https://dashboard-9740c.firebaseio.com",
        projectId: "dashboard-9740c",
        storageBucket: "dashboard-9740c.appspot.com",
        messagingSenderId: "669540400072",
        appId: "1:669540400072:web:95e632e7e2481f04e39efd"
    });

    context.configuration.routing.beforeEach.push(async (to: any, from: any, next: Function) => {
        if (to.path.startsWith("/auth") || await getCurrentUser()) {
            return true;
        }

        next({
            path: loginPath,
            query: {
                route: to.path
            }
        });
    });

    context.firebase = firebase;
}

async function getCurrentUser(): Promise<any> {
    try {
        return await new Promise(resolve => {
            firebase.auth().onAuthStateChanged((user) => resolve(user));
        });
    } catch {
        return false
    }
}
