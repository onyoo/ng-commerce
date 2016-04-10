class ProductsController < ApplicationController

  def index
    render json: Product.all
  end

  def show
    if (Integer(params[:id]) rescue false)
      render json: Product.find(params[:id])
    else
      category_name = params[:id].split('-').join(' ')
      render json: Product.includes(:categories).where(categories: {name: category_name})
    end
  end

  def create
    product = Product.create(product_params)
    product.save_url
    redirect_to root_path
  end

  def update
    product = Product.find(params[:id])
    if params[:file]
      product.product_image = params[:file]
      product.save_url
      render json: {url: product.image_url}
    else
      product.ratings.create(body: params[:review], score: params[:rating], rating_id: params[:rating_id])
      render json: product.ratings.last
    end
  end

  def destroy
    Product.destroy(params[:id])
    redirect_to root_path
  end

  private

  def product_params
    params.require(:product).permit(:name, :inventory, :price, :product_image, category_ids: [])
  end

end
