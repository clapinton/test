class Api::BillsController < ApplicationController

    def index
      @bills = Bill.all
      render "api/bills/index"
    end


    def show
      @bill = Bill.find(params[:id])

      #YOU'LL HAVE TO CHANGE THIS LOGIC TO ACCOUNT FOR USERS THAT ARE EITHER payers or split_payers OF THE BILL
      if @bill.author != current_user
        render json: ["You can not view this bill"], status: 403
      else
        render "api/bills/show"
      end
    end


    def create
      @bill = Bill.new(bill_params)
      @bill.author_id = current_user.id
      if @bill.save
        render "api/bills/show"
      else
        render json: @bill.errors.full_messages, status: 422
      end
    end


    def update
      @bill = Bill.find(params[:id])
      if @bill.update(bill_params)
        render "api/bills/show"
      else
        render json: @bill.errors.full_messages, status: 422
      end
    end

    def destroy
      @bill = Bill.find(params[:id])
      if @bill
        @bill.delete
        render json: ["Bill deleted"], status: 200
      else
        render json: ["Bill not found"], status: 422
      end
    end

    private

    def bill_params
      params.require(:bill).permit(:title, :amount, :category_id,
        :payer_id, :date, :doc_url, :split_type)
    end


end
