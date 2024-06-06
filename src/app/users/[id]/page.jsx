async function getInfo(id) {
  const info = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await info.json();
  return data.data;
}

async function Usuario1({ params }) {
  const data = await getInfo(params.id);
  console.log(data);
  return (
    <div className="profile-container">
      <div className="card-profile">
        <h2 className="text-center pb-3">
          {data.first_name} {data.last_name}
        </h2>
        <img className="rounded-full" src={data.avatar} />
        <p className="text-center pt-3">{data.email}</p>
      </div>
      <div className="card-info">
        <div>
          <h2 className="text-center font-bold pt-2.5">Position</h2>
        </div>

        <div className="p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </div>
        <div className="p-5">
            <span className="badge m-2">badge 1</span>
            <span className="badge m-2">badge 2</span>
            <span className="badge m-2">badge 3</span>
        </div>
      </div>
    </div>
  );
}

export default Usuario1;
