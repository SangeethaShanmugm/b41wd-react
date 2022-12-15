import { Msg } from "./Msg";

export function UserList() {
  const users = [
    {
      name: "Ibrahim",
      pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
    },
    {
      name: "Abdul",
      pic: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    },
    {
      name: "Abilash",
      pic: "https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg",
    },
    {
      name: "Amreesh",
      pic: "https://i.pinimg.com/736x/5a/e5/98/5ae598ff624217b9a5c008beb8c512d0.jpg",
    },
  ];
  return (
    <div>
      {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}
