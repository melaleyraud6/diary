class PostsController < ApplicationController
  def index
    @posts = Post.all.order("created_at DESC")  # 投稿一覧 新しい順番に
    @post = Post.new  # 新規投稿のためのインスタンス
  end

  def create
    Post.create(post_params)
    redirect_to root_path
  end

  private
  def post_params
    params.require(:post).permit(:title, :content, :image)
  end
end
