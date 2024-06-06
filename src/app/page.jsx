import Cards from "@/components/cards";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const result = await res.json();
  return result.data;
}

async function HomePage() {
  const data = await fetchUsers();
  return (
    <main>
      < Cards arrayCards={data}/>
    </main>
  );
}

export default HomePage;
