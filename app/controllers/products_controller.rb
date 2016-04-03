class ProductsController < ApplicationController

  def index
    render json: Product.all
  end

  def show
    category_name = params[:id].split('-').join(' ')
    render json: Product.includes(:categories).where(categories: {name: category_name})
  end

end
