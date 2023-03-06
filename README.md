## strftime

#### Adds strftime function to javascript Date object which has been long due.

#### Usage:

    var d = new Date();
    console.log(d.strftime("%a %d %B %Y %I:%M:%S %p"));

#### Supported format identifiers

Code|Example|Description
---|---|---
%A |Sunday |Weekday fullname.
%a |Sun|Weekday abbreviated name.
%d |08|Day of the month zero-padded.
%-d |8|Day of the month.
%b|Sep|Month abbreviated name.
%B|September|Month full name.
%Y|2022|Year with century as a decimal number.
%y|22|Year without century as a decimal number.
%H|16|Hour (24-hour clock) zero-padded
%I|04|Hour (12-hour clock) zero-padded
%M|06|Minute zero-padded.
%S|16|Second zero-padded.
%p|AM|AM or PM

Adding a hyphen as the second character, returns non zero-padded result when the result is a number.
For example, "%H" returns 04 whereas "%-H" returns 4
