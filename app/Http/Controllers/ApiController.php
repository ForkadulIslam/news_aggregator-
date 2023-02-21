<?php

namespace App\Http\Controllers;

use App\Models\My_feed;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    private $api_key = '07c0870b6be949a1aa2ae0516fa840cd';
    public function everything(){
        $my_saved_feed = User::find(auth()->user()->id)->my_feed;
        $query = '?apiKey='.$this->api_key.'&sortBy=popularity&pageSize=20&page=1';
        if($my_saved_feed){
            $query.='&sources='.$my_saved_feed->source_id;
        }else{
            $query .= '&q=apple';
        }
        //return $query;
        $data = Http::get('https://newsapi.org/v2/everything'.$query);
        return $data;
    }
    public function source(){
        $category = request()->category;
        $data = Http::get('https://newsapi.org/v2/top-headlines/sources?apiKey='.$this->api_key.'&category='.$category);
        return $data;
    }
    public function get_my_feed(){
        return User::find(auth()->user()->id)->my_feed;
    }
    public function my_feed(Request $request){
        $user = Auth::user();
        $my_feed = $user->my_feed;
        $feed = [
            'category' => $request->category,
            'source_id' => $request->selected_source_id,
        ];
        if($my_feed){
            $user->my_feed()->update($feed);
        }else{
            $user->my_feed()->create($feed);
        }
        $source = $request->selected_source_id;
        $query = '?pageSize=30&page=1&apiKey='.$this->api_key;
        $query.='&sources='.$source;
        $data = Http::get('https://newsapi.org/v2/everything'.$query);
        return $data;
    }
    function filter_feed(Request $request){
        $keyword = $request->keyword;
        $query = '?pageSize=30&page=1&apiKey='.$this->api_key;
        if($keyword){
            $query .= '&q='.$keyword;
        }
        $my_saved_feed = User::find(auth()->user()->id)->my_feed;
        if($my_saved_feed){
            $query.='&sources='.$my_saved_feed->source_id;
        }
        if($request->dateFrom){
            $date_from = Carbon::parse($request->dateFrom)->setTimezone('Asia/Dhaka')->format('Y-m-d');
            $query.='&from='.$date_from;
        }
        if($request->dateTo){
            $date_to = Carbon::parse($request->dateTo)->setTimezone('Asia/Dhaka')->format('Y-m-d');
            $query.= '&to='.$date_to;
        }

        //return $query;
        $data = Http::get('https://newsapi.org/v2/everything'.$query);
        return $data;
    }
}
