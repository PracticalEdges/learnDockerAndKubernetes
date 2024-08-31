const { getClient } = require("../utils/get_client");

const createUser = async (req, res) => {
    try {
        const prismaClient = getClient();
        console.log("req.body", req);
		const { name, email, bio, phone, gender } = req.body;
		await prismaClient.user.create({
			data: {
				name,
				email,
				bio,
                gender,
                phone,
			},
		});
        return res.status(201).json({ message: "User created" });
	} catch (error) {
        console.error("Error creating user", error);
        return res.status(500).json({ message: "Error creating user" });
    }
};


const deleteUser = async (req, res) => {
    try {
        const prismaClient = getClient();
        const { id } = req.params;
        console.log("id", id);
        await prismaClient.user.delete({
            where: {
                id: parseInt(id),
            },
        });
        return res.status(200).json({ message: "User deleted" });
    } catch (error) {
        console.error("Error deleting user", error);
        return res.status(500).json({ message: "Error deleting user" });
    }
};

const updateUser = async (req, res) => {
    try {
        const prismaClient = getClient();
        const { id } = req.params;
        const { name, email, bio, phone, gender } = req.body;
        await prismaClient.user.update({
			where: {
				id: parseInt(id),
			},
			data: {
				name,
				email,
				bio,
				phone,
                gender
			},
		});
        return res.status(200).json({ message: "User updated" });
    } catch (error) {
        console.error("Error updating user", error);
        return res.status(500).json({ message: "Error updating user" });
    }
};

const getUser = async (req, res) => {
    try {
        const prismaClient = getClient();
        const { id } = req.params;
        const user = await prismaClient.user.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error getting user", error);
        return res.status(500).json({ message: "Error getting user" });
    }
};

const getUsers = async (req, res) => {
    try {
        const prismaClient = getClient();
        const users = await prismaClient.user.findMany();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error getting users", error);
        return res.status(500).json({ message: "Error getting users" });
    }
};

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getUsers,
};