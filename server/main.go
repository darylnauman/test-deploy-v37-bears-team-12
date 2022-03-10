package main

import (
	"notes-app/controllers"
	"notes-app/database"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Connect to database
	database.ConnectDatabase()

	// Routes
	r.GET("/notes", controllers.FindNotes)
	r.GET("/notes/:id", controllers.FindNote)
	r.POST("/notes", controllers.CreateNote)
	r.PATCH("/notes/:id", controllers.UpdateNote)
	r.DELETE("/notes/:id", controllers.DeleteNote)

	// Run the server
	r.Run()
}
