Rails.application.routes.draw do
  devise_for :users # ユーザー機能に必要なルーティングを一気に生成してくれるdeviseのメソッド。
  root to: "posts#index"
  resources :posts, only: [:create, :show, :edit, :update, :destroy]
  resources :users, only: [:show]

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
