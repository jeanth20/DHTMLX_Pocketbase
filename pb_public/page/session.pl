#!/usr/bin/perl

use CGI;
use Apache::Session::File;
use Data::Dumper();

my $query = new CGI;
my %session;
my $id = undef;

$id = $query->cookie(-name=>"SID01");

tie %session, "Apache::Session::File", $id,
                    { Directory => "/tmp/",
                      LockDirectory => "/tmp/"};

if ($id == undef) {
     $cookie = $query->cookie( -name=>'SID01',
                               -value=>$session{_session_id},
                               -expires=>'+1h',
                               -path=>'/session');
    print $query->header(-cookie=>$cookie);
    print "Assigned session ID<br>n";
} else {
    print $query->header();
    print "Not assigned session ID<br>n";
};

$id = $session{_session_id};

print Dumper $id;

print "<html>\n";
print " <head><title>Session ID</title></head>\n";
print " <body bgcolor=#ffffff>\n";
print " Your session ID is $id\n";
print " </body>\n";
print "</html>\n";