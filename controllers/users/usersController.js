
// register
const registerUserCtrl= async (req, res) => {
  try {
    res.json({ msg: "Register route" });
  } catch (error) {
    res.json(error);
  }
};

// login
const loginUserCtrl= async (req, res) => {
  try {
    res.json({ msg: "Login routez" });
  } catch (error) {
    res.json(error);
  }
};

// profile
const profileUserCtrl= async (req, res) => {
  try {
    res.json({ msg: "Profile route" });
  } catch (error) {
    res.json(error);
  }
};

// delete user
const deleteUserCtrl= async (req, res) => {
  try {
    res.json({ msg: "DELETE route" });
  } catch (error) {
    res.json(error);
  }
};

// update user
const updateUserCtrl= async (req, res) => {
  try {
    res.json({ msg: "UPDATE route" });
  } catch (error) {
    res.json(error);
  }
};















module.exports={
    registerUserCtrl,
    loginUserCtrl,
    profileUserCtrl,
    deleteUserCtrl,
    updateUserCtrl
};
