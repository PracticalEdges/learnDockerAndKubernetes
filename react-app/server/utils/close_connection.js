const closeConnection = async (prisma) => {
	try {
		await prisma.$disconnect();
		console.log("Connection closed successfully");
	} catch (error) {
		console.error("Error closing connection", error);
	}
}

module.exports = { closeConnection };