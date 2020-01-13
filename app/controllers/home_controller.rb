class HomeController < ApplicationController
  def index
    @sum = 1 + 1
    @user = User.new(name: "Jaime", age: 12, gender: "Male")
  end
end
