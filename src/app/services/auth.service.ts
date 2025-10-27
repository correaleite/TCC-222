import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);

  login(email:string, senha: string){
    return signInWithEmailAndPassword(this.auth, email, senha);
  }

  register(email: string, senha: string){
    return createUserWithEmailAndPassword(this.auth,email,senha);
  }

  logout(){
    return signOut(this.auth);
  }

  loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

}
