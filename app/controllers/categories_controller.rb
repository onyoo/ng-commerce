class CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def show
    render json: Category.find_by(name: params[:id].split('-').join(' '))
  end

end
