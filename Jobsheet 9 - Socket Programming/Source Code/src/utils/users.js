const users = [];

// tambahPengguna
const tambahPengguna = ({ id, username, room }) => {
  const originalUsername = username.trim();
  const originalRoom = room.trim();

  const usernameCheck = originalUsername.toLowerCase();
  const roomCheck = originalRoom.toLowerCase();

  if (!usernameCheck || !roomCheck) {
    return { error: "Username dan room dibutuhkan!" };
  }

  const existingUser = users.find((user) => {
    return user.roomCheck === roomCheck && user.usernameCheck === usernameCheck;
  });

  if (existingUser) {
    return { error: "Username sudah digunakan!" };
  }

  const user = {
    id,
    username: originalUsername,
    room: originalRoom,
    usernameCheck,
    roomCheck,
  };

  users.push(user);
  return { user };
};

// hapusPengguna
const hapusPengguna = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

// ambilPengguna
const ambilPengguna = (id) => {
  return users.find((user) => user.id === id);
};

// ambilPenggunaDariRoom
const ambilPenggunaDariRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  tambahPengguna,
  hapusPengguna,
  ambilPengguna,
  ambilPenggunaDariRoom,
};
