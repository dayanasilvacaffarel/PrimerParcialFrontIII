//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario



function Card(user) {
  return (
    <div className= 'Card'>
      <h3>Valores ingresados:</h3>
      <ul>

          <li className='card' key={user.id}>
            <p>Me llamo: {user.data.nombre}</p>
            <br/>
            <p>Y mi serie favorita es: {user.data.serie}</p>
          </li>

      </ul>
    </div>
  );
}

export default Card;
