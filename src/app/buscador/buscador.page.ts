import { Component, OnInit } from '@angular/core';

// import { HttpClient } from "@angular/common/http";
// import { map } from "rxjs/operators";
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  users:any = [];
  constructor(
    // private http: HttpClient,
    private http2: HTTP
  ) { }

  ngOnInit() {
    console.log('negrooooo');
    // this.getusers().subscribe(res=>{
    //   console.log('res', res );  
    //   this.users = res;    
    // })

    
    
  }

  getapi_app(){
    this.http2.get('http://test2.sevensingenieros.com/ajax/buscador_colegiado.php?op=buscar_api&capitulo=0&nombre=SERGIO&tipo_busqueda=nombre', {}, {}).then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    });
  }

  

  // getusers(){
  //   return this.http
  //   .get('assets/files/buscador.json')
  //   .pipe(
  //     map((res:any) =>{
  //       return res.data
  //     })
  //   )
  // }


}
