class RatingsController < ApplicationController

  def show
    render json: Rating.where(product_id: params[:id])
  end

end
