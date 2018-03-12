// This is the long version of appp.components.ts:

export class AppComponent {
  // email = 'bill@gates.com';
  user1 = {
    email: 'bill@gates.com',
    importance:'High',
    subject:'New Windows',
    content:'Windows XI will launch in year 2100';
  }
  user2 = {
    email: 'ada@lovelace.com',
    importance:'High',
    subject:'Programming',
    content:'Enchantress of Numbers';
  }
  user3 = {
    email: 'john@carmac.com',
    importance:'Low',
    subject:'Updated Algo',
    content:'New algorithm for shadow volumes';
  }
  user4 = {
    email: 'gabe@newel.com',
    importance:'Low',
    subject:'HL3!',
    content:'Just kidding...';
  }
}

// This is the long version of app.component.html:

<table>
  <tr>
    <th><h2>Email</h2></th>
    <th><h2>Importance</h2></th>
    <th><h2>Subject</h2></th>
    <th><h2>Content</h2></th>
  </tr>
  <tr>
    <td><h5>{{ user1.email }}</h5></td>
    <td><h5>{{ user1.importance }}</h5></td>
    <td><h5>{{ user1.subject }}</h5></td>
    <td><h5>{{ user1.content }}</h5></td>
  </tr>
  <tr>
    <td><h5>{{ user2.email }}</h5></td>
    <td><h5>{{ user2.importance }}</h5></td>
    <td><h5>{{ user2.subject }}</h5></td>
    <td><h5>{{ user2.content }}</h5></td>
  </tr>
  <tr>
    <td><h5>{{ user3.email }}</h5></td>
    <td><h5>{{ user3.importance }}</h5></td>
    <td><h5>{{ user3.subject }}</h5></td>
    <td><h5>{{ user3.content }}</h5></td>
  </tr>
  <tr>
    <td><h5>{{ user4.email }}</h5></td>
    <td><h5>{{ user4.importance }}</h5></td>
    <td><h5>{{ user4.subject }}</h5></td>
    <td><h5>{{ user4.content }}</h5></td>
  </tr>
</table>
