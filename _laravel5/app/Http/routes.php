<?php

/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register all of the routes for an application.
  | It's a breeze. Simply tell Laravel the URIs it should respond to
  | and give it the controller to call when that URI is requested.
  |
 */

Route::get('/', 'WelcomeController@index');

Route::post('oauth/access_token', function() {
    return Response::json(Authorizer::issueAccessToken());
});

Route::get('api', ['before' => 'oauth', function() {
        // return the protected resource
        //echo “success authentication”;
        $user_id = Authorizer::getResourceOwnerId(); // the token user_id
        $user = \App\User::find($user_id); // get the user data from database
        return Response::json($user);
    }]);

//Route::get("/register", function() {
//    $user = new App\User();
//    $user->name = "test user";
//    $user->email = "test@test.com";
//    $user->password = \Illuminate\Support\Facades\Hash::make("password");
//    $user->save();
//});

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);
