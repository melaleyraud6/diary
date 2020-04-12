class PostsController < ApplicationController
  def index
    @posts = Post.all.order("created_at DESC")  # 投稿一覧 新しい順番に
    @post = Post.new  # 新規投稿のためのインスタンス
  end

  def create
    Post.create(post_params)
    redirect_to root_path
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    post = Post.find(params[:id]) # 編集したいレコードの情報が入る
    post.update(post_params)      # postをupdateメソッドによって更新
    redirect_to post_path(post.id) # 日記の詳細ページへ遷移
                                    # postには「今、更新した記事の情報」が入る
  end

  def destroy
    post = Post.find(params[:id]) # 削除したいレコードの情報が入る
    post.destroy
    redirect_to root_path
  end

  private
  def post_params
    params.require(:post).permit(:title, :content, :image)
  end
end
