

const Clock = () => {
  return (
    <div>
      <h2>{new Date().toLocaleString()}</h2>
      {/* Geçerli veya belirtilen yerel ayari kullanarak bir tarih ve saati bir dizeye dönüştürür */}
    </div>
  );
}

export default Clock