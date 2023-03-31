// import {APP_INITIALIZER, NgModule} from '@angular/core';
// import {Apollo, ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
// import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
// import { HttpLink } from 'apollo-angular/http';


// const uri = `http://localhost:4000/graphql`;

// export function createApollo(apollo: Apollo, httpLink: HttpLink){
// apollo.create({
//      link: httpLink.create({uri}),
//      cache: new InMemoryCache(),
//  });
// }

// @NgModule({
//   providers: [
//     {
//       provide: APP_INITIALIZER,
//       useFactory: createApollo,
//       deps: [Apollo,HttpLink],
//       multi: true
//     },
//   ],
// })
// export class GraphQLModule {}

import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any>{
// return {
//     link: httpLink.create({ uri }),
//     cache: new InMemoryCache(),
// };
// }
// @NgModule({
//     providers: [
//         {
//             provide: APOLLO_OPTIONS,
//             useFactory: createApollo,
//             deps: [HttpLink],
//         },
//     ],
// })
@NgModule({
    imports: [BrowserModule, ApolloModule, HttpClientModule],
    providers: [
      {
        provide: APOLLO_OPTIONS,
        useFactory: (httpLink: HttpLink) => {
          return {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://101340403-comp3133-assignment1.cyclic.app/graphql',
            }),
          };
        },
        deps: [HttpLink],
      },
    ],
  })

export class GraphQLModule {}