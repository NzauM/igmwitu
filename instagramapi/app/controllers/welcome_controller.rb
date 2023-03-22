class WelcomeController < ApplicationController
  def heythere
    render json: {hello: "Heeyyy there"}
  end
  def addpost
    puts params
    
  end
end
