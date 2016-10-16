#!/bin/sh                                                                                                                                                                                                         
if [ "$#" -lt 2 ]
then
exit;

fi
#change the input file if no 3rd argument                                                                                                                                                                         
if [ -z "$3" ]
then
        outputfile="$1"
else
        outputfile="$3"
fi
sed -nE '                                                                                                                                                                                                         
# if the first line of copy the pattern to the hold buffer                                                                                                                                                        
1h                                                                                                                                                                                                                
# if not the first line then append the pattern to the hold buffer                                                                                                                                                
1!H                                                                                                                                                                                                               
# if the last line then                                                                                                                                                                                           
$ {;                                                                                                                                                                                                              
        # copy from the hold to the pattern buffer                                                                                                                                                                
        g;                                                                                                                                                                                                        
        # do the search and replace                                                                                                                                                                               
        '"$2"'                                                                                                                                                                                                    
        #print                                                                                                                                                                                                    
        ;p;                                                                                                                                                                                                       
}                                                                                                                                                                                                              
' $1 > $1;
#mv -f $1 $outputfile;