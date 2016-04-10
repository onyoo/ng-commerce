class CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def show
    render json: Category.find_by(name: params[:id].split('-').join(' '))
  end

  def create
    Category.create(category_params)
    redirect_to root_path
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

end
